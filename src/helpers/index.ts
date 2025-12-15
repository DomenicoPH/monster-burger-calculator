export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('En-us', {
        style: 'currency', currency: 'USD'
    }).format(quantity)
}