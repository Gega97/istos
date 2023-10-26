import Result "mo:base/Result";
import T "./types";


module {
    
    public type CreateArgs = {
        userId : T.UserId;
        actionId : T.ActionId;
        contribution : T.Contribution;
        contributionState : T.State;
    };

    public type GetActionIdsArgs = {
        userId : T.UserId;
        contributionState : T.State;
    };

    public type GetUserIdsArgs = {
        actionId : T.ActionId;
        contributionState : T.State;
    };

    public type GetContributionArgs = {
        userId : T.UserId;
        actionId : T.ActionId;
        contributionState : T.State;
    };

    public type DeleteArgs = {
        userId : T.UserId;
        actionId : T.ActionId;
        contributionState : T.State;
    };

    public type CreateResult = Result.Result<CreateSuccess, Error>;
    public type GetActionIdsResult = Result.Result<GetSuccess, Error>;
    public type GetUserIdsResult = Result.Result<GetSuccess, Error>;
    public type GetContributionResult = Result.Result<GetContributionSuccess, Error>;
    public type GetContributionsResult = [GetContributionSuccess];
    public type DeleteResult = Result.Result<DeleteSuccess, Error>;

    public type GetSuccess = [{
        actionId : T.ActionId;
        userId : T.UserId;
    }];

    type GetContributionSuccess = {
        actionId : T.ActionId;
        userId : T.UserId;
        contribution : T.Contribution;
    };

    type CreateSuccess = ();
    type DeleteSuccess = ();

    type Error = {
        #NotFound;
    };


}