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
            var evidences = NRel.empty<T.UserId, T.ActionId, T.Evidence>();
        }
    };

    public func create (args : I.CreateArgs) : I.CreateResult {

        let { userId; actionId; evidence; evidenceState } = args;

        ignore NRel.put(
            evidenceState.evidences, 
            (userId, actionId, evidence), 
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        #ok(());

    };

    public func get (args : I.GetEvidenceArgs) : I.GetEvidenceResult {
        let { userId; actionId; evidenceState } = args;

        let evidence = NRel.get(
            evidenceState.evidences, 
            (userId, actionId), 
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        switch (evidence) {
            case (null) {
                #err(#NotFound);
            };
            case (?evidence) {
                #ok({ 
                    userId = evidence.0;
                    actionId = evidence.1;
                    evidence = evidence.2;
                });
            };
        };
    };

    public func getActionIds (args : I.GetActionIdsArgs) : I.GetActionIdsResult {
        
        let { userId; evidenceState } = args;

        let actionEvidenceArray = NRel.getY(
            evidenceState.evidences,
            userId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(actionEvidenceArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId}> = Buffer.Buffer(0);
            for (tup in actionEvidenceArray) {
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
        
        let { actionId; evidenceState } = args;

        let userEvidenceArray = NRel.getX(
            evidenceState.evidences,
            actionId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(userEvidenceArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId}> = Buffer.Buffer(0);
            for (tup in userEvidenceArray) {
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

    public func getByUserId (args : I.GetActionIdsArgs) : I.GetEvidencesResult {
        
        let { userId; evidenceState } = args;

        let actionEvidenceArray = NRel.getY(
            evidenceState.evidences,
            userId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );


        if (Iter.size(actionEvidenceArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId; evidence : T.Evidence}> = Buffer.Buffer(0);
            for (tup in actionEvidenceArray) {
                result.add({
                    userId;
                    actionId = tup.0;
                    evidence = tup.1
                });
            };
            Buffer.toArray(result);
        } else {
            [];
        };
    };

    public func getByActionId (args : I.GetUserIdsArgs) : I.GetEvidencesResult {
        
        let { actionId; evidenceState } = args;

        let userEvidenceArray = NRel.getX(
            evidenceState.evidences,
            actionId,
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        if (Iter.size(userEvidenceArray) != 0) {
            var result : Buffer.Buffer<{userId: T.UserId; actionId : T.ActionId; evidence : T.Evidence}> = Buffer.Buffer(0);
            for (tup in userEvidenceArray) {
                result.add({
                    actionId;
                    userId = tup.0;
                    evidence = tup.1
                });
            };
            Buffer.toArray(result);
        } else {
            [];
        };
    };

    public func delete (args : I.DeleteArgs) : I.DeleteResult {

        let { userId; actionId; evidenceState } = args;
        
        ignore NRel.delete(
            evidenceState.evidences, 
            (userId, actionId), 
            { x = Principal.equal; y = Text.equal }, 
            { x = Principal.hash; y = Text.hash }
        );

        #ok(());
    };

};