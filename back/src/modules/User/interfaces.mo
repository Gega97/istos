import Result "mo:base/Result";
import T "./types";


module {
    
    public type CreateArgs = {
        user : T.User; 
        userState : T.State;
    };

    public type GetArgs = {
        id : T.UserId;
        userState : T.State;
    };

    public type GetMultipleArgs = {
        ids : [T.UserId];
        userState : T.State;
    };

    public type UpdateArgs = {
        user : T.User;
        userState : T.State;
    };

    public type DeleteArgs = {
        id : T.UserId;
        userState : T.State;
    };

    public type CreateResult = Result.Result<CreateSuccess, Error>;
    public type GetResult = ?T.User;
    public type GetMultipleResult = [?T.User];
    public type UpdateResult = Result.Result<UpdateSuccess, Error>;
    public type DeleteResult = Result.Result<DeleteSuccess, Error>;

    type CreateSuccess = ();
    type UpdateSuccess = ();
    type DeleteSuccess = ();

    type Error = {
        #NotFound;
    };


}