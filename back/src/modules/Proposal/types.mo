import Trie "mo:base/Trie";
import PaymentT "../Payment/types";
import Rel "../StableRel";
import NRel "../StableFullRel";


module {

    public type UserId = Principal;
    public type ActionId = Text;
    public type ProposalId = Text;

    // public type Proposal = {
    //     id : ProposalId;
    //     title : Text;
    //     description : Text;
    //     image : [Nat8];
    //     points : Nat;
    //     payments : PaymentT.Payment<PaymentT.PaymentType, PaymentT.PaymentAmount>;
    // };
    
    // public type Proposals = Trie.Trie<ProposalId, Proposal>;

    public type State = {
        var proposals : Rel.Rel<UserId, ActionId>;
    };

}