import Text "mo:base/Text";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Auth "modules/Auth";
import Action "modules/Action";
import Contribution "modules/Contribution";
import Evidence "modules/Evidence";
import Execution "modules/Execution";
import Proposal "modules/Proposal";
import User "modules/User";
import I "interfaces";
import Utils "utils";


shared({ caller = owner }) actor class(initArgs: I.InitArgs) = Together {

    stable var authState = Auth.init(initArgs);
    stable var userState = User.init();
    stable var actionState = Action.init();
    stable var userProposedActionRel = Proposal.init();
    stable var contributionState = Contribution.init();
    stable var executionState = Execution.init();
    stable var evidenceState = Evidence.init();

    public shared({caller}) func createUser  (createUserArgs : I.CreateUserArgs) : async I.CreateUserResult {
        let id : Principal = caller;
        User.create(
          {
            user = {
              createUserArgs.user with
              id = id
            };
            userState
          }
        );
    };

    public query({caller}) func getUserByCaller () : async I.GetUserResult {
        let user = User.get({ id = caller; userState });

        return user;
    };

    public query({caller}) func getUserByPrincipal (getUserArgs : I.GetUserArgs) : async I.GetUserResult {
        return User.get(
          {
            id = getUserArgs.id;
            userState
          }
        );
    };

    public shared({caller}) func updateUser (updateUserArgs : I.UpdateUserArgs) : async I.UpdateUserResult {
        User.update(
          {
            user = updateUserArgs.user;
            userState
          }
        );
    };

    public shared({caller}) func deleteUser  (deleteUserArgs : I.DeleteUserArgs) : async I.DeleteUserResult {
        User.delete(
          {
            id = deleteUserArgs.id;
            userState
          }
        );
    };

    public shared({caller}) func createAction (proposeActionArgs : I.CreateActionArgs) : async I.ProposeActionResult {
      let id = await Utils.newUuid();
      let proposedAction = Action.create(
        {
          action = {
            proposeActionArgs.action with
            id = id;
          };
          actionState
        }
      );

      ignore Proposal.create(
        {
          actionId = id;
          userId = caller;
          proposalState = userProposedActionRel;
        }
      );
      return #ok(());
    };

    public shared({caller}) func updateAction (proposeActionArgs : I.UpdateActionArgs) : async I.ProposeActionResult {

      Action.update(
        {
          action = proposeActionArgs.action;
          actionState
        }
      );
    };

    public shared({caller}) func deleteAction (proposeActionArgs : I.DeleteActionArgs) : async I.ProposeActionResult {

      Action.delete(
        {
          id = proposeActionArgs.id;
          actionState
        }
      );
    };

    public query({caller}) func getAction (getActionArgs : I.GetActionArgs) : async I.GetActionResult {
      return Action.get(
        {
          id = getActionArgs.id;
          actionState
        }
      );
    };

    public query({caller}) func getDetailedAction (getActionArgs : I.GetActionArgs) : async I.GetDetailedActionResult { 
      
      let actionRes = Action.get(
        {
          id = getActionArgs.id;
          actionState
        }
      );

      switch (actionRes) {
        case (#err(e)) {
          #err(e);
        };
        case (#ok(action)) {

          let proposer = User.get({ id = action.proposer; userState });
          let contributors = User.getMultiple({ ids = action.contributors; userState });

          switch (action.status) {
            case (#Started) {
              #ok({
                action;
                proposer;
                contributors;
                executor = null;
              });
            };
            case (_) {
              let executorId = Execution.getUserIds({ actionId = action.id; userId = Option.get(action.executor, Principal.fromText("aa")); executionState });
              let executor = User.get({ id = executorId[0].userId; userState });
              #ok({
                action;
                proposer;
                contributors;
                executor;
              });
            };
          };
        };

      };

      

    };

    public shared({caller}) func contribute (createContributionArgs : I.CreateContributionArgs) : async I.CreateContributionResult {

      let contribution = Contribution.create(
        {
          userId = caller;
          actionId = createContributionArgs.actionId;
          contribution = createContributionArgs.contribution;
          contributionState
        }
      );
      return #ok(());
    };

    public query func getUserContributions (args : I.GetUserContributionArgs) : async I.GetContributionResult {
      return Contribution.getByUserId(
        {
          userId = args.userId;
          contributionState;
        }
      );
    };

    public query func getActionContributions (args : I.GetActionContributionArgs) : async I.GetContributionResult {
      return Contribution.getByActionId(
        {
          actionId = args.actionId;
          contributionState;
        }
      );
    };

    public shared({caller}) func submitEvidence (args : I.SubmitEvidenceArgs) : async I.SubmitEvidenceResult {
      let evidence = Evidence.create(
        {
          evidence = args.evidence;
          userId = caller;
          actionId = args.actionId;
          evidenceState;
        }
      );
      return #ok(());
    };

    public query func getActionEvidence (args : I.GetActionEvidenceArgs) : async I.GetActionEvidenceResult {
      return Evidence.getByActionId(
        {
          actionId = args.actionId;
          evidenceState;
        }
      );
    };

    public query func getActionExecution (args : I.GetActionExecutionArgs) : async I.GetActionExecutionResult {
      return Execution.getByActionId(
        {
          actionId = args.actionId;
          executionState;
        }
      );
    };
};