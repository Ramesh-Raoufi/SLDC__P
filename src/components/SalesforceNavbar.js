import React from "react";
 function SalesforceNavbar() {
  return (
    <div>
      <div class="slds-context-bar">
        <div class="slds-context-bar__primary">
          <div class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
            <div class="slds-context-bar__icon-action">
              <button
                class="slds-button slds-icon-waffle_container slds-context-bar__button"
                title="Description of the icon when needed"
              >
                <span class="slds-icon-waffle">
                  <span class="slds-r1"></span>
                  <span class="slds-r2"></span>
                  <span class="slds-r3"></span>
                  <span class="slds-r4"></span>
                  <span class="slds-r5"></span>
                  <span class="slds-r6"></span>
                  <span class="slds-r7"></span>
                  <span class="slds-r8"></span>
                  <span class="slds-r9"></span>
                </span>
                <span class="slds-assistive-text">Open App Launcher</span>
              </button>
            </div>
            <span class="slds-context-bar__label-action slds-context-bar__app-name">
              <span class="slds-truncate" title="App Name">
                Blog Page
              </span>
            </span>
          </div>
        </div>
        <nav class="slds-context-bar__secondary" role="navigation">
          <ul class="slds-grid">
            <li class="slds-context-bar__item slds-is-active">
              <a href="#" class="slds-context-bar__label-action" title="Home">
                <span class="slds-assistive-text">Current Page:</span>
                <span class="slds-truncate" title="Home">
                  Home
                </span>
              </a>
            </li>
            <li class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click">
              <a
                href="#"
                class="slds-context-bar__label-action"
                title="Menu Item"
              >
                <span class="slds-truncate" title="Menu Item">
                  About
                </span>
              </a>
              <div class="slds-dropdown slds-dropdown_right">
                <ul class="slds-dropdown__list" role="menu">
                  <li class="slds-dropdown__item" role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      <span class="slds-truncate" title="Main action">
                    
                        Main action
                      </span>
                    </a>
                  </li>
                  <li
                    class="slds-dropdown__header slds-has-divider_top-space"
                    role="separator"
                  >
                    <span>Menu header</span>
                  </li>
                  <li class="slds-dropdown__item" role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      <span class="slds-truncate" title="Menu Item One">
                        Menu Item One
                      </span>
                    </a>
                  </li>
                  <li class="slds-dropdown__item" role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      <span class="slds-truncate" title="Menu Item Two">
                        Menu Item Two
                      </span>
                    </a>
                  </li>
                  <li class="slds-dropdown__item" role="presentation">
                    <a href="#" role="menuitem" tabindex="-1">
                      <span class="slds-truncate" title="Menu Item Three">
                        Menu Item Three
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="slds-context-bar__item">
              <a
                href="#"
                class="slds-context-bar__label-action"
                title="Menu Item"
              >
                <span class="slds-truncate" title="Menu Item">
                  Menu Item
                </span>
              </a>
            </li>
            <li class="slds-context-bar__item">
              <a
                href="#"
                class="slds-context-bar__label-action"
                title="Menu Item"
              >
                <span class="slds-truncate" title="Menu Item">
                  Menu Item
                </span>
              </a>
            </li>
            <li class="slds-context-bar__item">
              <a
                href="#"
                class="slds-context-bar__label-action"
                title="Menu Item"
              >
                <span class="slds-truncate" title="Menu Item">
                  Menu Item
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default SalesforceNavbar;