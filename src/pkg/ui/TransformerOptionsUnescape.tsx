import React from "react";

export const TransformerOptionsUnescape = () => {
  return (
      <div>
        Convert this:
        <div className="">
          <code>&#123;\"level\":\"info\",\"returncode\":0&#125;</code>
        </div>
        to this:
        <div className="">
          <code>&#123;"level":"info","returncode":0&#125;</code>
        </div>
      </div>
  )
}