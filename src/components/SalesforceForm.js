import React from "react";
const SalesforceForm = () => {
  return (
    <div>
      <div class="slds-form" role="list">
        <div class="slds-form__row">
          <div class="slds-form__item" role="listitem">
            <div class="slds-form-element slds-form-element_horizontal slds-is-editing">
              <label
                class="slds-form-element__label"
                for="single-form-element-id-02"
              >
                Name:
              </label>
              <div class="slds-form-element__control">
                <input
                  type="text"
                  id="single-form-element-id-02"
                  placeholder="Placeholder text…"
                  class="slds-input"
                />
              </div>
            </div>
          </div>
          <div class="slds-form__item" role="listitem">
            <div class="slds-form-element slds-form-element_horizontal slds-is-editing">
              <label
                class="slds-form-element__label"
                for="single-form-element-id-03"
              >
                Email:
              </label>
              <div class="slds-form-element__control">
                <input
                  required
                  type="email"
                  id="single-form-element-id-03"
                  placeholder="Placeholder text…"
                  class="slds-input"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="slds-form__row">
          <div class="slds-form__item" role="listitem">
            <div class="slds-form-element slds-form-element_horizontal slds-is-editing slds-form-element_1-col">
              <label
                class="slds-form-element__label"
                for="single-form-element-id-04"
              >
                Your idea :
              </label>
              <div class="slds-form-element__control">
                <textarea
                  id="single-form-element-id-04"
                  placeholder="Placeholder text…"
                  class="slds-textarea"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesforceForm;
