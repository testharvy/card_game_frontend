import {Button} from "@/shared/ui";
import {freeCoinsAction} from "../model/actions.ts";
import {useTypedDispatch} from "@/shared/hooks";

export function FreeCoinButton(){
    const dispatch = useTypedDispatch();
    return <Button onClick={()=>dispatch(freeCoinsAction())} >freeCoins</Button>
}