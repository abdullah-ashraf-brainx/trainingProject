class Car {

    #color = null
    #spoiler = null
    #fuelType = null
    #model = null
    #productionDate = null


    // We define a static Builder class within `Car`
    static Builder = class {
        // the builder class will have the same attributes as
        // the parent
        #color = null
        #spoiler = null
        #fuelType = null
        #model = null
        #productionDate = null

        // there are four methods to set each of the four
        // attributes
        setColor(color) {
            this.#color = color
            // each method returns the builder object itself
            // this allows for chaining of methods
            return this
        }

        setSpoiler(spoiler) {
            this.#spoiler = spoiler
            return this
        }

        setFuelType(fuelType) {
            this.#fuelType = fuelType
            return this
        }

        setModel(model) {
            this.#model = model
            return this
        }

        setProductionDate(date) {
            this.#productionDate = date
            return this
        }

        // when we're done setting arguments, we can call the build method
        // to give us the `Car` instance
        build() {
            const car = new Car(
                this.#color,
                this.#spoiler,
                this.#fuelType,
                this.#model,
                this.#productionDate)
            return car
        }
    }

    constructor(color, spoiler, fuelType, model, productionDate) {
        this.#color = color
        this.#spoiler = spoiler
        this.#fuelType = fuelType
        this.#model = model
        this.#productionDate = productionDate
    }


    toString() {
        return `color: ${this.#color}
        spoiler: ${this.#spoiler}
        fuel type: ${this.#fuelType}
        model: ${this.#model}
        production date: ${this.#productionDate}`
    }

}

const car = new Car.Builder()
    .setColor('red')
    .setFuelType('petrol')
    .setProductionDate(new Date('2021-09-21'))
    .setSpoiler(false)
    .setModel(2010)
    .build()

console.log(car.toString())
