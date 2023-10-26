import Result "mo:base/Result";
import T "./types";


module {
    
    public type CreateArgs = {
        userId : T.UserId;
        actionId : T.ActionId;
        evidence : T.Evidence;
        evidenceState : T.State;
    };

    public type GetActionIdsArgs = {
        userId : T.UserId;
        evidenceState : T.State;
    };

    public type GetUserIdsArgs = {
        actionId : T.ActionId;
        evidenceState : T.State;
    };

    public type GetEvidenceArgs = {
        userId : T.UserId;
        actionId : T.ActionId;
        evidenceState : T.State;
    };

    public type DeleteArgs = {
        userId : T.UserId;
        actionId : T.ActionId;
        evidenceState : T.State;
    };

    public type CreateResult = Result.Result<CreateSuccess, Error>;
    public type GetActionIdsResult = Result.Result<GetSuccess, Error>;
    public type GetUserIdsResult = Result.Result<GetSuccess, Error>;
    public type GetEvidenceResult = Result.Result<GetEvidenceSuccess, Error>;
    public type GetEvidencesResult = [GetEvidenceSuccess];
    public type DeleteResult = Result.Result<DeleteSuccess, Error>;

    public type GetSuccess = [{
        actionId : T.ActionId;
        userId : T.UserId;
    }];

    type GetEvidenceSuccess = {
        actionId : T.ActionId;
        userId : T.UserId;
        evidence : T.Evidence;
    };

    type CreateSuccess = ();
    type DeleteSuccess = ();

    type Error = {
        #NotFound;
    };


}