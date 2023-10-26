import Trie "mo:base/Trie";
import T "./types";
import I "./interfaces";
import Utils "../../utils";
import Result "mo:base/Result";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Buffer "mo:base/Buffer";
import Option "mo:base/Option";
import Rel "../StableRel";
import NRel "../StableFullRel";


module {

    public func init () : T.State {
        {
            var users = Trie.empty();
        }
    };

    public func create (args : I.CreateArgs) : I.CreateResult {

        let { user; userState } = args;

        userState.users := Trie.put(
            userState.users,
            Utils.key(user.id),
            Principal.equal,
            user
        ).0;

        #ok(());

    };

    public func get (args : I.GetArgs) : I.GetResult {
        _get(args);
    };

    public func getMultiple (args : I.GetMultipleArgs) : I.GetMultipleResult {

        let { ids; userState } = args;
        let users : Buffer.Buffer<?T.User> = Buffer.Buffer(0);

        for (id in ids.vals()) {
            let user : ?T.User = _get({id; userState});
            users.add(user);
        };

        Buffer.toArray(users);
    };

    public func update (args : I.UpdateArgs) : I.UpdateResult {

        let { user; userState } = args;

        let result = Trie.find(
            userState.users,
            Utils.key(user.id),
            Principal.equal,
        );
        
        switch(result) {
            case null {
                #err(#NotFound);
            };
            case (? user) {
                userState.users := Trie.put(
                    userState.users,
                    Utils.key(user.id),
                    Principal.equal,
                    user
                ).0;
                #ok(());
            };
        };
    };

    public func delete (args : I.DeleteArgs) : I.DeleteResult {

        let { id; userState } = args;
        
        let result = Trie.find(
            userState.users,
            Utils.key(id),
            Principal.equal,
        );
        
        switch(result) {
            case null {
                #err(#NotFound);
            };
            case (? user) {
                userState.users := Trie.remove(
                    userState.users,
                    Utils.key(id),
                    Principal.equal,
                ).0;
                #ok(());
            };
        };
    };

    func _get (args : I.GetArgs) : ?T.User {
        
        let { id; userState } = args;

        Trie.find(
            userState.users,
            Utils.key(id),
            Principal.equal,
        );
    };

};