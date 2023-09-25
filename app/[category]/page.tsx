
export default function Category({ params: { category } }: { params: { category: string } }) {
    const searchRegex = /%\d{1,2}/g;
    const formatedParams = category.replace(searchRegex, " ");
    return (
        <div>Category {formatedParams}</div>
    )
}