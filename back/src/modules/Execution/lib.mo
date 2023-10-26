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
            var executions = NRel.empty<T.UserId, T.ActionId, T.Execution>();
        }
    };

    public func create (args : I.CreateArgs) : I.CreateResult {

        let { userId; actionId; execution; executionState } = args;

        ignore NRel.put(
            executionState.executions, 
            (userId, actionId, execution), 
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        #ok(());

    };

    public func get (args : I.GetExecutionArgs) : I.GetExecutionResult {
        let { userId; actionId; executionState } = args;

        let execution = NRel.get(
            executionState.executions, 
            (userId, actionId), 
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        switch (execution) {
            case (null) {
                #err(#NotFound);
            };
            case (?execution) {
                #ok({ 
                    userId = execution.0;
                    actionId = execution.1;
                    execution = execution.2;
                });
            };
        };
    };

    public func getActionIds (args : I.GetActionIdsArgs) : I.GetActionIdsResult {
        
        let { userId; executionState } = args;

        let actionExecutionArray = NRel.getY(
            executionState.executions,
            userId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(actionExecutionArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId}> = Buffer.Buffer(0);
            for (tup in actionExecutionArray) {
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
        
        let { actionId; executionState } = args;

        let userExecutionArray = NRel.getX(
            executionState.executions,
            actionId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(userExecutionArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId}> = Buffer.Buffer(0);
            for (tup in userExecutionArray) {
                result.add({
                    actionId;
                    userId = tup.0;
                });
            };
            Buffer.toArray(result);
        } else {
            [];
        };
    };

    public func getByUserId (args : I.GetActionIdsArgs) : I.GetExecutionsResult {
        
        let { userId; executionState } = args;

        let actionExecutionArray = NRel.getY(
            executionState.executions,
            userId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(actionExecutionArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId; execution : T.Execution}> = Buffer.Buffer(0);
            for (tup in actionExecutionArray) {
                result.add({
                    userId;
                    actionId = tup.0;
                    execution = tup.1
                });
            };
            Buffer.toArray(result);
        } else {
            [];
        };
    };

    public func getByActionId (args : I.GetUserIdsArgs) : I.GetExecutionsResult {
        
        let { actionId; executionState } = args;

        let userExecutionArray = NRel.getX(
            executionState.executions,
            actionId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(userExecutionArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId; execution : T.Execution}> = Buffer.Buffer(0);
            for (tup in userExecutionArray) {
                result.add({
                    actionId;
                    userId = tup.0;
                    execution = tup.1
                });
            };
            Buffer.toArray(result);
        } else {
            [];
        };
    };

    public func delete (args : I.DeleteArgs) : I.DeleteResult {

        let { userId; actionId; executionState } = args;
        
        ignore NRel.delete(
            executionState.executions, 
            (userId, actionId), 
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        #ok(());
    };

};