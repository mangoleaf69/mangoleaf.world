// a simple drop shiping model ;)
function estimate_profit(units = 100, cost = 100, time = 10, rate = 2000, packaging = 500, shiping = 100, tax = 1.40, profit = 2, loss = 0.8) {

    let total_cost_per_unit = cost + packaging + shiping;

    let product_development_cost = time * rate;

    let total_cost = total_cost_per_unit * units;

    let real_cost = total_cost + product_development_cost;

    // above we comput the standards costs for a single drop shiping product
    // note your time is free but dont asume that.
    let sold_units = units * loss; // loss represent invintory baught but never sold this asumes you sell 75%

    let actual_cost_per_unit = real_cost / sold_units;

    let simple_price = actual_cost_per_unit * tax * profit;

    let max_revenue = simple_price * units;
    let expected_revenue = simple_price * sold_units;

    // this estamates a price basedon model params and predicts revenue.

    let profit_per_unit = simple_price - actual_cost_per_unit;

    let max_profit = max_revenue - total_cost;
    let expected_profit = expected_revenue - total_cost;

    let output = {

        total_cost_per_unit,
        product_development_cost,
        total_cost,
        sold_units,
        actual_cost_per_unit,
        simple_price,
        max_revenue,
        expected_revenue,
        max_profit,
        expected_profit
    };

    return output;
}


function display_input_output(input, output) {

    let {
        units, //baught
        cost, // of a unit
        time, rate, // estamate for product dev cost
        packaging, shiping, // extra costs
        tax, profit, //multiplier for tax and profit
        loss // expected loss due to unsold goods
    } = input;

    let {
        total_cost_per_unit,
        product_development_cost,
        total_cost, real_cost, // real cost includes hourly and is what price is based on,
        sold_units,
        actual_cost_per_unit,
        simple_price,
        max_revenue, expected_revenue,
        max_profit, expected_profit
    } = output;


    console.log(input, output)


}


function predict_matrix() {

    let units = [10, 100, 500, 1000]

    let costs = [100, 500, 1000, 10000, 100000]

    for (let i = 0; i < units.length; i++) {

        for (let j = 0; j < costs.length; j++) {

            let u = units[i];
            let c = costs[j]
            let out = estimate_profit(u, c);

            console.log(`for scale of ${u}, and item baught for ${c} and sold for ${out.simple_price} the estamated profit is ${out.expected_profit} winth a min cost of ${out.total_cost}`)

        }

    }

}


predict_matrix()


/* // version 1
let units = 15

let cost = 100 * units
let time = 10 * 2000  // also advertising budjet
let packageing = 500 * units
let shiping = 100 * units
let tax = 1.40 
let profit = 1.50
let cost_total = cost + time + packageing + shiping  

let price = cost_total * tax * profit



let price_per_unit = price / units

let cnd = price_per_unit*0.0016
console.log("price = ", price_per_unit, "rs (or in cnd: ",cnd, "$)" );

console.log("total cost = ", cost_total);


let cost_price = cost_total / units
let profit_per_unit =  cost_price - price_per_unit
let take_home= profit_per_unit * units 
console.log("take home= ", take_home);
// profit = selling price - cost price
// cost price = price_per_unit
// selling price = cost_total/units


let units_sold = 10

let total_revenue = price_per_unit * units_sold

let total_profit = total_revenue - cost_total

let profit_per_unit_sold = total_profit / units_sold;

console.log(`YOU spend ${cost_total} -> YOu make ${total_revenue} THERFORE you Take home ${total_profit}`)
*/
