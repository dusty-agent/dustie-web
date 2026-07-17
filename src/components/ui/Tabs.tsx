import "./Tabs.css";

export interface TabItem<T extends string = string> {

    value: T;

    label: string;

}

interface TabsProps<T extends string> {

    items: TabItem<T>[];

    value: T;

    onChange: (value: T) => void;

}

export default function Tabs<T extends string>({
    items,
    value,
    onChange,
}: TabsProps<T>) {

    return (
        <div className="tabs">
            {items.map(item => (
                <button
                    key={item.value}
                    className={value === item.value ? "tab active" : "tab"}
                    onClick={() => onChange(item.value)}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}