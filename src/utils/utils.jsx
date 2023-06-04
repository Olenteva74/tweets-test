export const getComma = (number) => {
    const numberLength = String(number).length;
    if (numberLength > 3) {
        const index = numberLength - 3;
        return String(number).slice(0, index) + "," + String(number).slice(-3);
    } else {
        return number;
    }
};

export const getBgColorFollowButton = ({status}) => {
    return status ? "#5CD3A8" : "#EBD8FF";
}