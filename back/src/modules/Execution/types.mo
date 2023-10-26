import Trie "mo:base/Trie";
import PaymentT "../Payment/types";
import Rel "../StableRel";
import NRel "../StableFullRel";


module {

    public type UserId = Principal;
    public type ActionId = Text;

    public type State = {
        var executions : NRel.Rel<UserId, ActionId, Execution>;
    };

    public type Execution = {
        description : ?Text;
        images : [Nat8];
    };

}