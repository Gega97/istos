import Trie "mo:base/Trie";
import Rel "../StableRel";
import NRel "../StableFullRel";

module {

    public type UserId = Principal;
    public type ActionId = Text;

    public type User = {
        id : UserId;
        username : Text;
        name : Text;
        description : Text;
        avatar : [Nat8];
    };
    
    public type Users = Trie.Trie<UserId, User>;

    public type State = {
        var users : Users;
    };

    public type ExecutedActions = {
        description : Text;
        evidence : [Evidence];
    };

    type Evidence = {
        image : [Nat8];
        description : Text;
    };

    public type Error = {
        #NotAuthorized;
    };

};