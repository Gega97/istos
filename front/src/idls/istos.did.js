export const idlFactoryIstos = ({ IDL }) => {
  const Branch = IDL.Rec();
  const Branch_2 = IDL.Rec();
  const List = IDL.Rec();
  const List_1 = IDL.Rec();
  const List_2 = IDL.Rec();
  const List_3 = IDL.Rec();
  const Trie_1 = IDL.Rec();
  const Trie_3 = IDL.Rec();
  const ActionId = IDL.Text;
  const Payment = IDL.Text;
  const Contribution = IDL.Record({
    payments: IDL.Opt(Payment),
    description: IDL.Opt(IDL.Text),
    points: IDL.Opt(IDL.Nat),
  });
  const CreateContributionArgs = IDL.Record({
    actionId: ActionId,
    contribution: Contribution,
  });
  const CreateContributionSuccess = IDL.Null;
  const CreateContributionError = IDL.Variant({ NotFound: IDL.Null });
  const CreateContributionResult = IDL.Variant({
    ok: CreateContributionSuccess,
    err: CreateContributionError,
  });
  const Status = IDL.Variant({
    Started: IDL.Null,
    PartiallyPaid: IDL.Null,
    FullyPaid: IDL.Null,
    Executed: IDL.Null,
  });
  const UserId = IDL.Principal;
  const BaseAction = IDL.Record({
    status: Status,
    title: IDL.Text,
    payments: IDL.Opt(Payment),
    description: IDL.Text,
    proposer: UserId,
    image: IDL.Vec(IDL.Nat8),
    executor: IDL.Opt(UserId),
    contributors: IDL.Vec(UserId),
    points: IDL.Opt(IDL.Nat),
  });
  const Hash = IDL.Nat32;
  const Key = IDL.Record({ key: ActionId, hash: Hash });
  const Branch_1 = IDL.Record({
    left: Trie_1,
    size: IDL.Nat,
    right: Trie_1,
  });
  const Key_1 = IDL.Record({ key: UserId, hash: Hash });
  List.fill(IDL.Opt(IDL.Tuple(IDL.Tuple(Key_1, IDL.Null), List)));
  const AssocList_1 = IDL.Opt(IDL.Tuple(IDL.Tuple(Key_1, IDL.Null), List));
  const Leaf_1 = IDL.Record({ size: IDL.Nat, keyvals: AssocList_1 });
  Trie_1.fill(IDL.Variant({ branch: Branch_1, leaf: Leaf_1, empty: IDL.Null }));
  List_1.fill(IDL.Opt(IDL.Tuple(IDL.Tuple(Key, Trie_1), List_1)));
  const AssocList = IDL.Opt(IDL.Tuple(IDL.Tuple(Key, Trie_1), List_1));
  const Leaf = IDL.Record({ size: IDL.Nat, keyvals: AssocList });
  const Trie = IDL.Variant({
    branch: Branch,
    leaf: Leaf,
    empty: IDL.Null,
  });
  Branch.fill(IDL.Record({ left: Trie, size: IDL.Nat, right: Trie }));
  const Trie2D = IDL.Variant({
    branch: Branch,
    leaf: Leaf,
    empty: IDL.Null,
  });
  const Branch_3 = IDL.Record({
    left: Trie_3,
    size: IDL.Nat,
    right: Trie_3,
  });
  List_2.fill(IDL.Opt(IDL.Tuple(IDL.Tuple(Key, IDL.Null), List_2)));
  const AssocList_3 = IDL.Opt(IDL.Tuple(IDL.Tuple(Key, IDL.Null), List_2));
  const Leaf_3 = IDL.Record({ size: IDL.Nat, keyvals: AssocList_3 });
  Trie_3.fill(IDL.Variant({ branch: Branch_3, leaf: Leaf_3, empty: IDL.Null }));
  List_3.fill(IDL.Opt(IDL.Tuple(IDL.Tuple(Key_1, Trie_3), List_3)));
  const AssocList_2 = IDL.Opt(IDL.Tuple(IDL.Tuple(Key_1, Trie_3), List_3));
  const Leaf_2 = IDL.Record({ size: IDL.Nat, keyvals: AssocList_2 });
  const Trie_2 = IDL.Variant({
    branch: Branch_2,
    leaf: Leaf_2,
    empty: IDL.Null,
  });
  Branch_2.fill(IDL.Record({ left: Trie_2, size: IDL.Nat, right: Trie_2 }));
  const Trie2D_1 = IDL.Variant({
    branch: Branch_2,
    leaf: Leaf_2,
    empty: IDL.Null,
  });
  const Rel = IDL.Record({ back: Trie2D, forw: Trie2D_1 });
  const CreateActionArgs = IDL.Record({
    action: BaseAction,
    proposal: Rel,
  });
  const ProposeActionSuccess = IDL.Null;
  const ProposeActionError = IDL.Variant({ NotFound: IDL.Null });
  const ProposeActionResult = IDL.Variant({
    ok: ProposeActionSuccess,
    err: ProposeActionError,
  });
  const BaseUser = IDL.Record({
    username: IDL.Text,
    name: IDL.Text,
    description: IDL.Text,
    avatar: IDL.Vec(IDL.Nat8),
  });
  const CreateUserArgs = IDL.Record({ user: BaseUser });
  const CreateUserSuccess = IDL.Null;
  const UserError = IDL.Variant({ NotFound: IDL.Null });
  const CreateUserResult = IDL.Variant({
    ok: CreateUserSuccess,
    err: UserError,
  });
  const DeleteActionArgs = IDL.Record({ id: ActionId });
  const DeleteUserArgs = IDL.Record({ id: UserId });
  const DeleteUserSuccess = IDL.Null;
  const DeleteUserResult = IDL.Variant({
    ok: DeleteUserSuccess,
    err: UserError,
  });
  const GetActionArgs = IDL.Record({ id: ActionId });
  const GetActionSuccess = IDL.Record({
    id: ActionId,
    status: Status,
    title: IDL.Text,
    payments: IDL.Opt(Payment),
    description: IDL.Text,
    proposer: UserId,
    image: IDL.Vec(IDL.Nat8),
    executor: IDL.Opt(UserId),
    contributors: IDL.Vec(UserId),
    points: IDL.Opt(IDL.Nat),
  });
  const ActionError = IDL.Variant({ NotFound: IDL.Null });
  const GetActionResult = IDL.Variant({
    ok: GetActionSuccess,
    err: ActionError,
  });
  const GetActionContributionArgs = IDL.Record({ actionId: ActionId });
  const GetContributionSuccess = IDL.Record({
    userId: UserId,
    actionId: ActionId,
    contribution: Contribution,
  });
  const GetContributionResult = IDL.Vec(GetContributionSuccess);
  const GetActionEvidenceArgs = IDL.Record({ actionId: ActionId });
  const Evidence = IDL.Record({
    description: IDL.Opt(IDL.Text),
    images: IDL.Vec(IDL.Nat8),
  });
  const GetActionEvidenceSuccess = IDL.Record({
    userId: UserId,
    evidence: Evidence,
    actionId: ActionId,
  });
  const GetActionEvidenceResult = IDL.Vec(GetActionEvidenceSuccess);
  const GetActionExecutionArgs = IDL.Record({ actionId: ActionId });
  const Execution = IDL.Record({
    description: IDL.Opt(IDL.Text),
    images: IDL.Vec(IDL.Nat8),
  });
  const GetActionExecutionSuccess = IDL.Record({
    userId: UserId,
    execution: Execution,
    actionId: ActionId,
  });
  const GetActionExecutionResult = IDL.Vec(GetActionExecutionSuccess);
  const Action = IDL.Record({
    id: ActionId,
    status: Status,
    title: IDL.Text,
    payments: IDL.Opt(Payment),
    description: IDL.Text,
    proposer: UserId,
    image: IDL.Vec(IDL.Nat8),
    executor: IDL.Opt(UserId),
    contributors: IDL.Vec(UserId),
    points: IDL.Opt(IDL.Nat),
  });
  const User = IDL.Record({
    id: UserId,
    username: IDL.Text,
    name: IDL.Text,
    description: IDL.Text,
    avatar: IDL.Vec(IDL.Nat8),
  });
  const GetDetailedActionSuccess = IDL.Record({
    action: Action,
    proposer: IDL.Opt(User),
    executor: IDL.Opt(User),
    contributors: IDL.Vec(IDL.Opt(User)),
  });
  const GetDetailedActionResult = IDL.Variant({
    ok: GetDetailedActionSuccess,
    err: ActionError,
  });
  const GetUserResult = IDL.Opt(User);
  const GetUserArgs = IDL.Record({ id: UserId });
  const GetUserContributionArgs = IDL.Record({ userId: UserId });
  const SubmitEvidenceArgs = IDL.Record({
    evidence: Evidence,
    actionId: ActionId,
  });
  const SubmitEvidenceSuccess = IDL.Null;
  const SubmitEvidenceError = IDL.Variant({ NotFound: IDL.Null });
  const SubmitEvidenceResult = IDL.Variant({
    ok: SubmitEvidenceSuccess,
    err: SubmitEvidenceError,
  });
  const UpdateActionArgs = IDL.Record({ action: Action });
  const UpdateUserArgs = IDL.Record({ user: User });
  const UpdateUserSuccess = IDL.Null;
  const UpdateUserResult = IDL.Variant({
    ok: UpdateUserSuccess,
    err: UserError,
  });
  const anon_class_15_1 = IDL.Service({
    contribute: IDL.Func(
      [CreateContributionArgs],
      [CreateContributionResult],
      []
    ),
    createAction: IDL.Func([CreateActionArgs], [ProposeActionResult], []),
    createUser: IDL.Func([CreateUserArgs], [CreateUserResult], []),
    deleteAction: IDL.Func([DeleteActionArgs], [ProposeActionResult], []),
    deleteUser: IDL.Func([DeleteUserArgs], [DeleteUserResult], []),
    getAction: IDL.Func([GetActionArgs], [GetActionResult], ["query"]),
    getActionContributions: IDL.Func(
      [GetActionContributionArgs],
      [GetContributionResult],
      ["query"]
    ),
    getActionEvidence: IDL.Func(
      [GetActionEvidenceArgs],
      [GetActionEvidenceResult],
      ["query"]
    ),
    getActionExecution: IDL.Func(
      [GetActionExecutionArgs],
      [GetActionExecutionResult],
      ["query"]
    ),
    getDetailedAction: IDL.Func(
      [GetActionArgs],
      [GetDetailedActionResult],
      ["query"]
    ),
    getUserByCaller: IDL.Func([], [GetUserResult], ["query"]),
    getUserByPrincipal: IDL.Func([GetUserArgs], [GetUserResult], ["query"]),
    getUserContributions: IDL.Func(
      [GetUserContributionArgs],
      [GetContributionResult],
      ["query"]
    ),
    submitEvidence: IDL.Func([SubmitEvidenceArgs], [SubmitEvidenceResult], []),
    updateAction: IDL.Func([UpdateActionArgs], [ProposeActionResult], []),
    updateUser: IDL.Func([UpdateUserArgs], [UpdateUserResult], []),
  });
  return anon_class_15_1;
};
export const init = ({ IDL }) => {
  return [];
};
