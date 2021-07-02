import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { refreshElections } from "../actions/election-tool";
import { ElectionList } from "../components/ElectionList";
import { CommonHeader } from "../components/CommonHeader";
import { SubMenu } from "../components/SubMenu";

export const ElectionListContainer = () => {
  const menuLinks = [
    {
      href: "/createElection",
      label: "Create an Election",
    },
  ];

  const elections = useSelector((state) => state.elections);
  const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          refreshElections: refreshElections,
        },
        dispatch
      ),
    [dispatch]
  );

  useEffect(() => {
    actions.refreshElections();
  }, [actions]);

  return (
    <>
      <CommonHeader title="Election Tools" />
      <SubMenu menuLinks={menuLinks} />
      <ElectionList elections={elections} />
    </>
  );
};
