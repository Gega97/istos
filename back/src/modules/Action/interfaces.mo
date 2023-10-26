import Result "mo:base/Result";
import T "./types";
import UserT "../User/types";
import ContributionT "../Contribution/types";


module {
    
    public type CreateArgs = {
        action : T.Action;
        actionState : T.State;
    };

    public type GetArgs = {
        id : T.ActionId;
        actionState : T.State;
    };

    public type UpdateArgs = {
        action : T.Action;
        actionState : T.State;
    };

    public type DeleteArgs = {
        id : T.ActionId;
        actionState : T.State;
    };

    public type CreateResult = Result.Result<CreateSuccess, Error>;
    public type GetResult = Result.Result<GetSuccess, Error>;
    public type GetFullResult = Result.Result<GetFullSuccess, Error>;
    public type UpdateResult = Result.Result<UpdateSuccess, Error>;
    public type DeleteResult = Result.Result<DeleteSuccess, Error>;

    type GetSuccess = T.Action;
    public type GetFullSuccess = {
        action : T.Action;
        proposer : UserT.User;
        contributions : [{
            user : UserT.User;
            contribution : ContributionT.Contribution;
        }];
    };
    type CreateSuccess = { id : T.ActionId };
    type UpdateSuccess = ();
    type DeleteSuccess = ();

    type Error = {
        #NotFound;
    };


}