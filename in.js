/*Your JS-based app needs to make two requests to an
external API to fetch two sets of data. customers and
orders. Due to how you'll need to use this data, a good
strategy is to match and merge the two lists into one:
a list of customers where each item can have a nested list
of orders.

Build a denormalize function which takes in two arrays 
and the reference ID (foreign key), the first one being 
the primary type (in this case denormalize(customers, orders,
'customer_id')), and returns a new array with the nested structure
described above.
should not mutate the existing array 
instances or items
should not match and merge lists into one
*/


function denormalize({primary, related, 
    relatedName, referencedId}){
        
    return primary;

    
}

    // return primary.map(item => {
    //     return {
    //     ...item,
    //     [relatedName]: related.filter(relatedItem => {
    //         return relatedItem[referencedId] === item.id
    //     })

    //     }

    // })


}