export function distinct<T extends (string | number)> ( arr: Array<T> ): Array<T>;
export function distinct<T> ( arr: Array<T>, idFunc?: ( obj: T ) => string | number ): Array<T>;

export function distinct<T> ( arr: Array<T>, idFunc?: ( obj: T ) => string | number ): Array<T>
{
    const map: Record<number | string, boolean> = {};
    const distArr: Array<T> = [];

    for ( const obj of arr )
    {
        const id = idFunc ? idFunc(obj) : obj;

        if ( map[id as any] )
        {
            continue;
        }

        distArr.push(obj);

        map[id as any] = true;
    }

    return distArr;
}
