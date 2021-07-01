import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { refreshElections } from "../actions/election-tool";
import { ElectionList } from "../components/ElectionList";

export const ElectionListContainer = () => {
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

  return <ElectionList elections={elections} />;
};
