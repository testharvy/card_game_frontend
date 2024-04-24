import {useTypedSelector} from "@/shared/hooks";
import {LINKS_FOR_AUTH, LINKS_FOR_NOT_AUTH} from "@/shared/const";

export function useTokenLinks(){
    const token = useTypedSelector(state => state.user.token );
    const LINKS = (token!='') ? LINKS_FOR_AUTH : LINKS_FOR_NOT_AUTH;
    return LINKS;
}