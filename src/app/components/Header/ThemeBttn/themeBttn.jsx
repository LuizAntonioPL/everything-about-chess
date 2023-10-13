import "./themeBttn.css";

export default function ThemeButton() {
  return (
    <div>
      <input type="checkbox" id="ThemeBttn" onclick="ThemeBttnFunc()" />
      <label htmlFor="ThemeBttn">
        <div className="circle"></div>
        <div className="sunrayTop" />
        <div className="sunray45deg" />
        <div className="sunrayBottom" />
        <div className="sunray135deg" />
        <div className="sunrayLeft" />
        <div className="sunray225deg" />
        <div className="sunrayRight" />
        <div className="sunray315deg" />
      </label>
    </div>
  );
}
