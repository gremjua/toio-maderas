import CartItem from './CartItem';

const CartList = ({ cart }) => {
    return (
        <div>
            {cart.map((itemAndQuantity) => {
                return <CartItem key={itemAndQuantity.item.id} itemAndQuantity={itemAndQuantity} />;
            })}
        </div>
    );
};

export default CartList;
