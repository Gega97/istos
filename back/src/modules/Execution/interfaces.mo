import Result "mo:base/Result";
import T "./types";


module {
    
    public type CreateArgs = {
        userId : T.UserId;
        actionId : T.ActionId;
        execution : T.Execution;
        executionState : T.State;
    };

    public type GetActionIdsArgs = {
        userId : T.UserId;
        executionState : T.State;
    };

    public type GetUserIdsArgs = {
        actionId : T.ActionId;
        executionState : T.State;
    };

    public type GetExecutionArgs = {
        userId : T.UserId;
        actionId : T.ActionId;
        executionState : T.State;
    };

    public type DeleteArgs = {
        userId : T.UserId;
        actionId : T.ActionId;
        executionState : T.State;
    };

    public type CreateResult = Result.Result<CreateSuccess, Error>;
    public type GetActionIdsResult = Result.Result<GetSuccess, Error>;
    public type GetUserIdsResult = GetSuccess;
    public type GetExecutionResult = Result.Result<GetExecutionSuccess, Error>;
    public type GetExecutionsResult = [GetExecutionSuccess];
    public type DeleteResult = Result.Result<DeleteSuccess, Error>;

    public type GetSuccess = [{
        actionId : T.ActionId;
        userId : T.UserId;
    }];

    type GetExecutionSuccess = {
        actionId : T.ActionId;
        userId : T.UserId;
        execution : T.Execution;
    };

    type CreateSuccess = ();
    type DeleteSuccess = ();

    type Error = {
        #NotFound;
    };


}