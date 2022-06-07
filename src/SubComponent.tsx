export type SubComponentProps = {
    count: number;
}

export const SubComponent = (props: SubComponentProps) => {
    const { count } = props;

    return (
        <p>Hallo dit is een subcomponent en de count is {count}</p>
    );
};