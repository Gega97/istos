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
            var proposals = Rel.empty<T.UserId, T.ActionId>();
        }
    };

    public func create (args : I.CreateArgs) : I.CreateResult {

        let { userId; actionId; proposalState } = args;

        ignore Rel.put(
            proposalState.proposals, 
            (userId, actionId), 
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        #ok(());

    };

    public func getActionIds (args : I.GetActionIdsArgs) : I.GetActionIdsResult {
        
        let { userId; proposalState } = args;

        let actionIdArray = Rel.getY(
            proposalState.proposals,
            userId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(actionIdArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId}> = Buffer.Buffer(0);
            for (actionId in actionIdArray) {
                result.add({
                    userId;
                    actionId;
                });
            };
            #ok(Buffer.toArray(result));
        } else {
            #err(#NotFound);
        };
    };

    public func getUserId (args : I.GetUserIdsArgs) : I.GetUserIdsResult {
        
        let { actionId; proposalState } = args;

        let userIdArray = Rel.getX(
            proposalState.proposals,
            actionId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(userIdArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId}> = Buffer.Buffer(0);
            for (userId in userIdArray) {
                result.add({
                    userId;
                    actionId;
                });
            };
            #ok(Buffer.toArray(result)[0]);
        } else {
            #err(#NotFound);
        };
    };

    public func delete (args : I.DeleteArgs) : I.DeleteResult {

        let { userId; actionId; proposalState } = args;
        
        ignore Rel.delete(
            proposalState.proposals, 
            (userId, actionId), 
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        #ok(());
    };

};