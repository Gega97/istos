import Trie "mo:base/Trie";
import PaymentT "../Payment/types";
import Rel "../StableRel";
import NRel "../StableFullRel";


module {

    public type UserId = Principal;
    public type ActionId = Text;

    // public type Contribution = {
    //     id : ContributionId;
    //     title : Text;
    //     description : Text;
    //     image : [Nat8];
    //     points : Nat;
    //     payments : PaymentT.Payment<PaymentT.PaymentType, PaymentT.PaymentAmount>;
    // };
    
    // public type Contributions = Trie.Trie<ContributionId, Contribution>;

    public type State = {
        var contributions : NRel.Rel<UserId, ActionId, Contribution>;
    };

    public type Contribution = {
        description : ?Text;
        points : ?Nat;
        payments : ?PaymentT.Payment<PaymentT.PaymentType, PaymentT.PaymentAmount>;
    };

}