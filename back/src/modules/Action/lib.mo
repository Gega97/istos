import Trie "mo:base/Trie";
import T "./types";
import I "./interfaces";
import Utils "../../utils";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Rel "../StableRel";
import NRel "../StableFullRel";


module {

    public func init () : T.State {
        {
            var actions = Trie.empty();
        }
    };

    public func create (args : I.CreateArgs) : I.CreateResult {

        let { action; actionState } = args;

        actionState.actions := Trie.put(
            actionState.actions,
            Utils.keyText(action.id),
            Text.equal,
            action
        ).0;

        #ok({ id = action.id });

    };

    public func get (args : I.GetArgs) : I.GetResult {
        
        let { id; actionState } = args;

        let result = Trie.find(
            actionState.actions,
            Utils.keyText(id),
            Text.equal,
        );
        
        switch(result) {
            case null {
                #err(#NotFound);
            };
            case (? action) {
                #ok(action);
            };
        };
    };

    // public func getDetails (args : I.GetArgs) : I.GetFullResult {
        
    //     let { id; actionState } = args;

    //     let result = Trie.find(
    //         actionState.actions,
    //         Utils.keyText(id),
    //         Text.equal,
    //     );
        
    //     switch(result) {
    //         case null {
    //             #err(#NotFound);
    //         };
    //         case (? action) {


    //             switch (action.status) {
                    
    //                 case (#Started) {

    //                 };
    //                 case (#Executed) {

    //                 };
    //                 case (#PartiallyPaid) {

    //                 };
    //                 case (#FullyPaid) {

    //                 };

    //             };

    //             let contributed = Rel.get(
    //                 actionState.contributed,
    //                 action.id,
    //             );



    //             #ok(action);
    //         };
    //     };
    // };

    public func update (args : I.UpdateArgs) : I.UpdateResult {

        let { action; actionState } = args;

        let result = Trie.find(
            actionState.actions,
            Utils.keyText(action.id),
            Text.equal,
        );
        
        switch(result) {
            case null {
                #err(#NotFound);
            };
            case (? action) {
                actionState.actions := Trie.put(
                    actionState.actions,
                    Utils.keyText(action.id),
                    Text.equal,
                    action
                ).0;
                #ok(());
            };
        };
    };

    public func delete (args : I.DeleteArgs) : I.DeleteResult {

        let { id; actionState } = args;
        
        let result = Trie.find(
            actionState.actions,
            Utils.keyText(id),
            Text.equal,
        );
        
        switch(result) {
            case null {
                #err(#NotFound);
            };
            case (? action) {
                actionState.actions := Trie.remove(
                    actionState.actions,
                    Utils.keyText(id),
                    Text.equal,
                ).0;
                #ok(());
            };
        };
    };

};