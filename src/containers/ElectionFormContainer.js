import { CommonHeader } from "../components/CommonHeader";
import { ElectionForm } from "../components/ElectionForm";

export const ElectionFormContainer = () => {
    return (
        <>
            <CommonHeader title="Election Form" />
            <ElectionForm />
        </>
    );
}