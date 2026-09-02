export class Car {

    private _carNumber!: string;
    private _carModel!: string;
    private _carColor!: string;
    private _carPrice!: number;
    private _speed!: number;

    // Common for all cars
    private static _companyName: string = "Maruti";
    private static _companyLocation: string = "Kolkata";

    constructor(carNumber: string, carModel: string, carColor: string, carPrice: number, speed: number) {
        //use the property to update any non-static variable
        this.carNumber = carNumber;
        this.carModel = carModel;
        this.carColor = carColor;
        this.carPrice = carPrice;
        this.speed = speed;
    }

    public static get companyName(): string {
        return Car._companyName;
    }

    public static get companyLocation(): string {
        return Car._companyLocation;
    }

    public get carNumber(): string {
        return this._carNumber;
    }
    public set carNumber(value: string) {
        this._carNumber = value;
    }

    public get carModel(): string {
        return this._carModel;
    }
    public set carModel(value: string) {
        this._carModel = value;
    }

    public get carColor(): string {
        return this._carColor;
    }
    public set carColor(value: string) {
        this._carColor = value;
    }

    public get carPrice(): number {
        return this._carPrice;
    }
    public set carPrice(value: number) {
        this._carPrice = value;
    }

    public get speed(): number {
        return this._speed;
    }
    public set speed(value: number) {
        if (value > 0) {
            this._speed = value;
        }

    }

}


