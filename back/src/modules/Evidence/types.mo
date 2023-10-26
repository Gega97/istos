import Trie "mo:base/Trie";
import PaymentT "../Payment/types";
import Rel "../StableRel";
import NRel "../StableFullRel";


module {

    public type UserId = Principal;
    public type ActionId = Text;

    public type State = {
        var evidences : NRel.Rel<UserId, ActionId, Evidence>;
    };

    public type Evidence = {
        description : ?Text;
        images : [Nat8];
    };

}