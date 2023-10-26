import Trie "mo:base/Trie";
import PaymentT "../Payment/types";
import Rel "../StableRel";
import NRel "../StableFullRel";


module {

    public type UserId = Principal;
    public type ActionId = Text;

    public type Action = {
        id : ActionId;
        title : Text;
        description : Text;
        image : [Nat8];
        proposer : UserId;
        contributors : [UserId];
        executor : ?UserId;
        status : Status;
        points : ?Nat;
        payments : ?PaymentT.Payment<PaymentT.PaymentType, PaymentT.PaymentAmount>;
    };

    type Status = {
        #Started;
        #Executed;
        #PartiallyPaid;
        #FullyPaid;
    };
    
    public type Actions = Trie.Trie<ActionId, Action>;

    public type State = {
        var actions : Actions;
    };

    public type ExecutedActions = {
        description : Text;
        evidence : [Evidence];
    };

    public type Evidence = {
        image : [Nat8];
        description : Text;
    };

}