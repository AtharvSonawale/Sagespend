import { useContext } from 'react';
import { TransactionContext } from './TransactionContext';

const Balance = () => {
    const {balance} = useContext(TransactionContext);

    return (
                <div>
                    <h1>Balance: &#8377;${balance.toFixed(2)}</h1>
                </div>
            );
}



// function Balance() {
//     return (
//         <div>
//             <h1>Balance: &#8377;${balance.toFixed(2)}</h1>
//         </div>
//     );
// }

export default Balance;