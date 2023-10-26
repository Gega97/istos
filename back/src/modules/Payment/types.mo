

module {

    public type Payment<PaymentType, PaymentAmount> = Text;

    public type PaymentType = {
        #Token : ?Tokens;
        #Fiat : ?Text;
    };

    public type Tokens = {
        #ICP;
        #ICRC;
    };

    public type PaymentAmount = Nat;

};