---
title: Create tooltip for menu
excerpt: When the menu is collapse, it will be better if we have tooltip showing
image: create-tooltip-for-menu.png
isFeatured: true
date: "2022-05-10"
---

## Create tooltip for menu

When the menu is collapse, it will be better if we have tooltip showing. We can do it like following:

### For the menu item

```js
if (this.props.collapseMenu) {
  subContent = (
    <OverlayTrigger
      key={this.props.item.title}
      placement="top"
      overlay={
        <Tooltip className="menu-tooltip" id={`tooltip-${this.props.item.title}`}>
          {this.props.item.title}
        </Tooltip>
      }
    >
      <NavLink to={navUrl} className={className} exact={true} target={itemTarget}>
        <NavIcon items={this.props.item} title={this.props.item.title} />
        {itemTitle}
        <NavBadge layout={this.props.layout} items={this.props.item} />
      </NavLink>
    </OverlayTrigger>
  );
}
```

### CSS

To fine tune the tooltip, we using CSS like this.

```css
.menu-tooltip > .tooltip-inner {
  background-color: green;
  color: white;
}
.menu-tooltip > .arrow {
  visibility: hidden;
}
```

### Bonus CSS

This CSS use for the menu

```css
.menu-items > ul > li:hover,
.menu-items > ul > li:active,
.menu-item1:hover,
.menu-item1:active {
  background: green !important;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: inset 0 -1px 0 0 #afbcc6;
  color: white;
  .m-item1,
  a,
  a > span {
    color: white;
  }
}

.menu-items > ul > li.menu-category,
.menu-items > ul > li.menu-category:hover,
.menu-items > ul > li.menu-category > a,
.menu-items > ul > li.menu-category > a:hover {
  background-color: lightgrey !important;
  color: #525458 !important;
  font-weight: bold;
}
```
