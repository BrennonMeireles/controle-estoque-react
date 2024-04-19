import "./style.css"

export default function Main() {
    return (
        <main>
            <article>
                <h1>
                    Showing
                    <span> All Products</span>
                </h1>
            </article>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>SKU</th>
                        <th>Brand</th>
                        <th>Stock in Hand</th>
                        <th>Reorder Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product 1</td>
                        <td>SKU123</td>
                        <td>Brand A</td>
                        <td>100</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Product 2</td>
                        <td>SKU456</td>
                        <td>Brand B</td>
                        <td>50</td>
                        <td>5</td>
                    </tr>
                </tbody>

            </table>
        </main>
    )
}