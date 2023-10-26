import Trie "mo:base/Trie";
import Iter "mo:base/Iter";
import T "./types";
import I "./interfaces";
import Utils "../../utils";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Buffer "mo:base/Buffer";
import Time "mo:base/Time";
import Rel "../StableRel";
import NRel "../StableFullRel";


module {

    public func init () : T.State {
        {
            var contributions = NRel.empty<T.UserId, T.ActionId, T.Contribution>();
        }
    };

    public func create (args : I.CreateArgs) : I.CreateResult {

        let { userId; actionId; contribution; contributionState } = args;

        ignore NRel.put(
            contributionState.contributions, 
            (userId, actionId, contribution), 
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        #ok(());

    };

    public func get (args : I.GetContributionArgs) : I.GetContributionResult {
        let { userId; actionId; contributionState } = args;

        let contribution = NRel.get(
            contributionState.contributions, 
            (userId, actionId), 
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        switch (contribution) {
            case (null) {
                #err(#NotFound);
            };
            case (?contribution) {
                #ok({ 
                    userId = contribution.0;
                    actionId = contribution.1;
                    contribution = contribution.2;
                });
            };
        };
    };

    public func getActionIds (args : I.GetActionIdsArgs) : I.GetActionIdsResult {
        
        let { userId; contributionState } = args;

        let actionContributionArray = NRel.getY(
            contributionState.contributions,
            userId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(actionContributionArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId}> = Buffer.Buffer(0);
            for (tup in actionContributionArray) {
                result.add({
                    userId;
                    actionId = tup.0;
                });
            };
            #ok(Buffer.toArray(result));
        } else {
            #err(#NotFound);
        };
    };

    public func getUserIds (args : I.GetUserIdsArgs) : I.GetUserIdsResult {
        
        let { actionId; contributionState } = args;

        let userContributionArray = NRel.getX(
            contributionState.contributions,
            actionId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(userContributionArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId}> = Buffer.Buffer(0);
            for (tup in userContributionArray) {
                result.add({
                    actionId;
                    userId = tup.0;
                });
            };
            #ok(Buffer.toArray(result));
        } else {
            #err(#NotFound);
        };
    };

    public func getByUserId (args : I.GetActionIdsArgs) : I.GetContributionsResult {
        
        let { userId; contributionState } = args;

        let actionContributionArray = NRel.getY(
            contributionState.contributions,
            userId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(actionContributionArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId; contribution : T.Contribution}> = Buffer.Buffer(0);
            for (tup in actionContributionArray) {
                result.add({
                    userId;
                    actionId = tup.0;
                    contribution = tup.1
                });
            };
            Buffer.toArray(result);
        } else {
            [];
        };
    };

    public func getByActionId (args : I.GetUserIdsArgs) : I.GetContributionsResult {
        
        let { actionId; contributionState } = args;

        let userContributionArray = NRel.getX(
            contributionState.contributions,
            actionId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(userContributionArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId; contribution : T.Contribution}> = Buffer.Buffer(0);
            for (tup in userContributionArray) {
                result.add({
                    actionId;
                    userId = tup.0;
                    contribution = tup.1
                });
            };
            Buffer.toArray(result);
        } else {
            [];
        };
    };

    public func delete (args : I.DeleteArgs) : I.DeleteResult {

        let { userId; actionId; contributionState } = args;
        
        ignore NRel.delete(
            contributionState.contributions, 
            (userId, actionId), 
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        #ok(());
    };

};