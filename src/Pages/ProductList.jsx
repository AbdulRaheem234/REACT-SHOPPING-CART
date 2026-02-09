import CategoryFilter from "../Components/CategoryFilter";
import SearchFilter from "../Components/SearchFilter";

function ProductList() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <SearchFilter />
        <CategoryFilter />
      </div>
    </>
  );
}

export default ProductList;
