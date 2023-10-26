
import Source "mo:uuid.mo/async/SourceV4";
import UUID "mo:uuid.mo/UUID";
import Trie "mo:base/Trie";
import Principal "mo:base/Principal";
import Text "mo:base/Text";

module {

    public func newUuid () : async Text {
        let g = Source.Source();
        UUID.toText(await g.new());
    };

    public func key(x : Principal) : Trie.Key<Principal> {
        return { key = x; hash = Principal.hash(x) }
    };

    public func keyText(x : Text) : Trie.Key<Text> {
        return { key = x; hash = Text.hash(x) }
    };

};