import Buffer "mo:base/Buffer";
import Hash "mo:base/Hash";
import Iter "mo:base/Iter";
import List "mo:base/List";
import Prelude "mo:base/Prelude";
import Text "mo:base/Text";
import Trie "mo:base/Trie";

/// As base CanCan Rel lib by DFINITY is used: https://github.com/dfinity/cancan/blob/main/backend/Rel.mo

module {

  public type HashPair<X, Y> = {
    x : X -> Hash.Hash;
    y : Y -> Hash.Hash;
  };

  public type EqualPair<X, Y> = {
    x : (X, X) -> Bool;
    y : (Y, Y) -> Bool;
  };

  public func empty<X, Y, Z>() : Rel<X, Y, Z> {
    {
      forw = Trie.empty();
      back = Trie.empty();
    }
  };

  public type Rel<X, Y, Z> = {
    forw : Trie.Trie2D<X, Y, Z> ;
    back : Trie.Trie2D<Y, X, Z> ;
  };

  public func keyX<X, Y, Z>( rel : Rel<X, Y, Z>,  x : X, hash : HashPair<X, Y>) : Trie.Key<X> {
    { key = x ; hash = hash.x(x) }
  };

  public func keyY<X, Y, Z>( rel : Rel<X, Y, Z>,  y : Y, hash : HashPair<X, Y>) : Trie.Key<Y> {
    { key = y ; hash = hash.y(y) }
  };

  public func key<X, Y, Z>( 
    rel : Rel<X, Y, Z>, 
    p : (X, Y, Z),
    hash : HashPair<X, Y>
    )
    : (Trie.Key<X>, Trie.Key<Y>)
  {
    (keyX(rel, p.0, hash),
     keyY(rel, p.1, hash))
  };

  public func isIn<X, Y, Z>(
    rel : Rel<X, Y, Z>, 
    p : (X, Y),
    equal : EqualPair<X, Y>,
    hash : HashPair<X, Y>   
    ) : Bool {
    switch (Trie.find<X, Trie.Trie<Y, Z>>(rel.forw, keyX(rel, p.0, hash), equal.x)) {
    case null false;
    case (?t) {
           switch (Trie.find<Y, Z>(t, keyY(rel, p.1, hash), equal.y)) {
           case null false;
           case _ true;
           }
         };
    }
  };

  public func get<X, Y, Z>(
    rel : Rel<X, Y, Z>, 
    p : (X, Y),
    equal : EqualPair<X, Y>,
    hash : HashPair<X, Y>   
    ) : ?(X, Y, Z) {
    switch (Trie.find<X, Trie.Trie<Y, Z>>(rel.forw, keyX(rel, p.0, hash), equal.x)) {
    case null null;
    case (?t) {
           switch (Trie.find<Y, Z>(t, keyY(rel, p.1, hash), equal.y)) {
           case null null;
           case (?z) ?(p.0, p.1, z);
           }
         };
    }
  };

  public func getY<X, Y, Z>(
    rel : Rel<X, Y, Z>,
    x : X,
    equal : EqualPair<X, Y>,
    hash : HashPair<X, Y>
  ) : Iter.Iter<(Y, Z)> {
    let t = Trie.find<X, Trie.Trie<Y, Z>>(rel.forw, keyX(rel, x, hash), equal.x);
    switch t {
      case null { object { public func next() : ?(Y, Z) { null } } };
      case (?t) { iterAll(t) };
    }
  };

  public func getX<X, Y, Z>(
    rel : Rel<X, Y, Z>, 
    y : Y,
    equal : EqualPair<X, Y>,
    hash : HashPair<X, Y>
  ) : Iter.Iter<(X, Z)> {
    let t = Trie.find<Y, Trie.Trie<X, Z>>(rel.back, keyY(rel, y, hash), equal.y);
    switch t {
      case null { object { public func next() : ?(X, Z) { null } } };
      case (?t) { iterAll(t) };
    }
  };

  public func put<X, Y, Z>(
    rel : Rel<X, Y, Z>, 
    p : (X, Y, Z),
    equal : EqualPair<X, Y>,
    hash : HashPair<X, Y>
    ) : Rel<X, Y, Z> {
    let k = key(rel, p, hash);
    {
      forw = Trie.put2D(rel.forw, k.0, equal.x, k.1, equal.y, p.2) ;
      back = Trie.put2D(rel.back, k.1, equal.y, k.0, equal.x, p.2) ;
    }
  };

  public func delete<X, Y, Z>( 
    rel : Rel<X, Y, Z>, 
    p : (X, Y),
    equal : EqualPair<X, Y>,
    hash : HashPair<X, Y>
    ) : Rel<X, Y, Z> {
    let k = (keyX(rel, p.0, hash), keyY(rel, p.1, hash));
    {
      forw = Trie.remove2D(rel.forw, k.0, equal.x, k.1, equal.y).0 ;
      back = Trie.remove2D(rel.back, k.1, equal.y, k.0, equal.x).0 ;
    }
  };

  public func getAllRelated<X,Y,Z>( rel : Rel<X, Y, Z> ) : [(X, Y)] {
    
    let iterX : Iter.Iter<(X,Trie.Trie<Y, Z>)> = Trie.iter(rel.forw);
    let buff : Buffer.Buffer<(X, Y)> = Buffer.Buffer(1);
    
    for (xV in iterX) {
      let iterY : Iter.Iter<(Y,Z)> = Trie.iter(xV.1);
      for (yV in iterY) {
        buff.add(
          xV.0,
          yV.0
        );
      };
    };

    Buffer.toArray(buff);
  };

  func iterAll<K, Z>(t : Trie.Trie<K, Z>)
    : Iter.Iter<(K, Z)>
    =
    object {
    var stack = ?(t, null) : List.List<Trie.Trie<K, Z>>;
    public func next() : ?(K,Z) {
      switch stack {
      case null { null };
      case (?(trie, stack2)) {
             switch trie {
             case (#empty) {
                    stack := stack2;
                    next()
                  };
             case (#leaf({keyvals=null})) {
                    stack := stack2;
                    next()
                  };
             case (#leaf({size=c; keyvals=?((k2, z2), kvs)})) {
                    stack := ?(#leaf({size=c-1; keyvals=kvs}), stack2);
                    ?(k2.key, z2)
                  };
             case (#branch(br)) {
                    stack := ?(br.left, ?(br.right, stack2));
                    next()
                  };
             }
           }
      }
    }
  };


}