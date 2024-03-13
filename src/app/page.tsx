import ReviewOrder from "@/components/order-review/ReviewOrder";

export default function Home() {
    return (
        <div className="container mx-auto lg:p-4 w-full mt-4">
            <h1 className="text-3xl font-bold mb-4 w-full">Your Cart</h1>
            <ReviewOrder />
        </div>
    );
}
