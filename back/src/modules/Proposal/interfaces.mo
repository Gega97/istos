import Result "mo:base/Result";
import T "./types";


module {
    
    public type CreateArgs = {
        userId : T.UserId;
        actionId : T.ActionId;
        proposalState : T.State;
    };

    public type GetActionIdsArgs = {
        userId : T.UserId;
        proposalState : T.State;
    };

    public type GetUserIdsArgs = {
        actionId : T.ActionId;
        proposalState : T.State;
    };

    public type DeleteArgs = {
        userId : T.UserId;
        actionId : T.ActionId;
        proposalState : T.State;
    };

    public type CreateResult = Result.Result<CreateSuccess, Error>;
    public type GetActionIdsResult = Result.Result<GetActionIdsSuccess, Error>;
    public type GetUserIdsResult = Result.Result<GetUserIdSuccess, Error>;
    public type DeleteResult = Result.Result<DeleteSuccess, Error>;

    public type GetActionIdsSuccess = [{
        actionId : T.ActionId;
        userId : T.UserId;
    }];
    public type GetUserIdSuccess = {
        actionId : T.ActionId;
        userId : T.UserId;
    };
    type CreateSuccess = ();
    type DeleteSuccess = ();

    type Error = {
        #NotFound;
    };


}