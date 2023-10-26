import Result "mo:base/Result";
import PaymentT "./modules/Payment/types";
import Rel "./modules/StableRel";
import NRel "./modules/StableFullRel";

module {

    type UserId = Principal;
    type ActionId = Text;
    
    public type InitArgs = {
        environment : Text;
        allowedUsers : ?[Principal];
        auth : [Principal];
        admins : [Principal];
    };

    type User = {
        id : UserId;
        username : Text;
        name : Text;
        description : Text;
        avatar : [Nat8];
    };

    type BaseUser = {
        username : Text;
        name : Text;
        description : Text;
        avatar : [Nat8];
    };

    public type CreateUserArgs = {
        user : BaseUser;
    };

    public type GetUserArgs = {
        id : UserId;
    };

    public type UpdateUserArgs = {
        user : User;
    };

    public type DeleteUserArgs = {
        id : UserId;
    };

    public type CreateUserResult = Result.Result<CreateUserSuccess, UserError>;
    public type UpdateUserResult = Result.Result<UpdateUserSuccess, UserError>;
    public type DeleteUserResult = Result.Result<DeleteUserSuccess, UserError>;
    public type GetUserResult = ?User;

    type CreateUserSuccess = ();
    type UpdateUserSuccess = ();
    type DeleteUserSuccess = ();

    type UserError = {
        #NotFound;
    };

    public type Action = {
        id : ActionId;
        title : Text;
        description : Text;
        image : [Nat8];
        status : Status;
        points : ?Nat;
        proposer : UserId;
        contributors : [UserId];
        executor : ?UserId;
        payments : ?PaymentT.Payment<PaymentT.PaymentType, PaymentT.PaymentAmount>;
    };
    
    public type BaseAction = {
        title : Text;
        description : Text;
        image : [Nat8];
        status : Status;
        points : ?Nat;
        proposer : UserId;
        contributors : [UserId];
        executor : ?UserId;
        payments : ?PaymentT.Payment<PaymentT.PaymentType, PaymentT.PaymentAmount>;
    };
    
    type Status = {
        #Started;
        #Executed;
        #PartiallyPaid;
        #FullyPaid;
    };
    
    public type CreateActionArgs = {
        action : BaseAction;
        proposal : Rel.Rel<UserId, ActionId>;
    };

    public type UpdateActionArgs = {
        action : Action;
    };

    public type DeleteActionArgs = {
        id : ActionId;
    };

    public type GetActionArgs = {
        id : ActionId;
    };

    public type GetUserContributionArgs = {
        userId : UserId;
    };

    public type GetActionContributionArgs = {
        actionId : ActionId;
    };

    public type CreateActionResult = Result.Result<CreateActionSuccess, ActionError>;

    public type UpdateActionResult = Result.Result<UpdateActionSuccess, ActionError>;

    public type DeleteActionResult = Result.Result<DeleteActionSuccess, ActionError>;

    public type GetActionResult = Result.Result<GetActionSuccess, ActionError>;

    public type GetContributionResult = [GetContributionSuccess];

    public type GetDetailedActionResult = Result.Result<GetDetailedActionSuccess, ActionError>;

    public type GetActionsResult = Result.Result<GetActionsSuccess, GetActionsError>;

    type GetActionsSuccess = [Action];
    type GetActionsError = {
        #NotFound;
    };

    type CreateActionSuccess = ();
    type UpdateActionSuccess = ();
    type DeleteActionSuccess = ();
    type GetActionSuccess = Action;
    type GetDetailedActionSuccess = {
        action : Action;
        proposer : ?User;
        contributors : [?User];
        executor : ?User;
    };
    
    type ActionError = {
        #NotFound;
    };

    public type CreateContributionArgs = {
        actionId : ActionId;
        contribution : Contribution;
    };

    public type GetContributionArgs = {
        id : Text;
    };

    public type GetContributionsResult = Result.Result<GetContributionsSuccess, GetContributionsError>;

    public type GetContributionsSuccess = [Contribution];
    public type GetContributionsError = {
        #NotFound;
    };

    type GetContributionSuccess = {
        actionId : ActionId;
        userId : UserId;
        contribution : Contribution;
    };

    type GetContributionError = {
        #NotFound;
    };

    public type CreateContributionResult = Result.Result<CreateContributionSuccess, CreateContributionError>;

    type CreateContributionSuccess = ();
    type CreateContributionError = {
        #NotFound;
    };

    public type Contribution = {
        description : ?Text;
        points : ?Nat;
        payments : ?PaymentT.Payment<PaymentT.PaymentType, PaymentT.PaymentAmount>;
    };

    public type ProposeActionResult = Result.Result<ProposeActionSuccess, ProposeActionError>;

    type ProposeActionSuccess = ();
    type ProposeActionError = {
        #NotFound;
    };

    public type SubmitEvidenceArgs = {
        actionId : ActionId;
        evidence : Evidence;
    };

    public type Evidence = {
        description : ?Text;
        images : [Nat8];
    };

    public type SubmitEvidenceResult = Result.Result<SubmitEvidenceSuccess, SubmitEvidenceError>;

    type SubmitEvidenceSuccess = ();
    type SubmitEvidenceError = {
        #NotFound;
    };

    public type GetActionEvidenceArgs = {
        actionId : ActionId;
    };

    public type GetActionExecutionArgs = GetActionEvidenceArgs;

    public type GetActionEvidenceResult = [GetActionEvidenceSuccess];
    public type GetActionExecutionResult = [GetActionExecutionSuccess];

    type GetActionExecutionSuccess = {
        actionId : ActionId;
        userId : UserId;
        execution : Execution;
    };

    public type Execution = {
        description : ?Text;
        images : [Nat8];
    };

    type GetActionEvidenceSuccess = {
        actionId : ActionId;
        userId : UserId;
        evidence : Evidence;
    };

    type GetActionEvidenceError = {
        #NotFound;
    };



}