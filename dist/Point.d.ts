import { PointSettings } from './options';
/**
 * Point defines the values that will be written to the database.
 * <a href="http://bit.ly/influxdata-point">See Go Implementation</a>.
 */
export default class Point {
    private name;
    private tags;
    private fields;
    private time;
    /**
     * Create a new Point with specified a measurement name.
     *
     * @param measurementName the measurement name
     * @return new instance of {@link Point}
     */
    constructor(measurementName?: string);
    /**
     * Sets point's measurement.
     *
     * @param name measurement name
     * @return new instance of {@link Point}
     */
    measurement(name: string): Point;
    /**
     * Adds a tag.
     *
     * @param name  tag name
     * @param value tag value
     * @return this
     */
    tag(name: string, value: string): Point;
    /**
     * Adds a boolean field.
     *
     * @param field field name
     * @param value field value
     * @return this
     */
    booleanField(name: string, value: boolean | any): Point;
    /**
     * Adds an integer field.
     *
     * @param name field name
     * @param value field value
     * @return this
     */
    intField(name: string, value: number | any): Point;
    /**
     * Adds a number field.
     *
     * @param name field name
     * @param value field value
     * @return this
     */
    floatField(name: string, value: number | any): Point;
    /**
     * Adds a string field.
     *
     * @param name field name
     * @param value field value
     * @return this
     */
    stringField(name: string, value: string | any): Point;
    /**
     * Sets point time.
     *
     * @param value point time
     * @return this
     */
    timestamp(value: string | undefined): Point;
    toLineProtocol(settings?: PointSettings): string | undefined;
    toString(): string;
}
//# sourceMappingURL=Point.d.ts.map