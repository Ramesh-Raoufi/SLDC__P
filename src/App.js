import SalesforceButton from "./components/SalesforceButton";
import SalesforceForm from "./components/SalesforceForm";
import SalesforceNavbar from "./components/SalesforceNavbar";
import "./App.css";
function App() {
  return (
    <div>
      <SalesforceNavbar />
      <div className="m-10 p-10">
        <p>
          <b>WebAssembly</b> (Wasm) is a powerful technology that enables
          high-performance, low-level code execution in web browsers and beyond.
          Here's a comprehensive overview of WebAssembly, covering its
          background, features, use cases, advantages, and future prospects:
          Background: WebAssembly originated from the collaboration between
          major browser vendors (Mozilla, Google, Microsoft, and Apple) as an
          open standard for a new binary format that executes at near-native
          speed in modern web browsers. It was officially announced in 2015 and
          reached the W3C recommendation status in 2019. Features: Efficiency:
          WebAssembly provides a compact binary format that is fast to download
          and parse, reducing load times for web applications. Performance: It
          executes code at near-native speed, making it suitable for
          computationally intensive tasks. Portability: WebAssembly is
          platform-independent and can run in any environment that supports it,
          including web browsers, server-side environments, and IoT devices.
          Safety: WebAssembly runs in a sandboxed environment with controlled
          access to resources, ensuring security and preventing malicious code
          execution. Interoperability: It can seamlessly integrate with
          JavaScript and other web technologies, enabling developers to leverage
          existing codebases and libraries. Use Cases: Web Applications:
          WebAssembly enables developers to build high-performance web
          applications for tasks such as gaming, multimedia processing, and
          scientific computing. Server-Side Applications: WebAssembly can be
          used in server-side environments, allowing developers to write
          performance-critical code for tasks like image processing or data
          manipulation. Cross-Platform Development: WebAssembly facilitates
          cross-platform development by enabling code reuse between web,
          desktop, and mobile applications. Game Development: WebAssembly is
          well-suited for browser-based game development, providing the
          performance necessary for complex graphics and physics calculations.
          Scientific Computing: WebAssembly can accelerate scientific
          simulations and data analysis in the browser, opening up new
          possibilities for interactive data visualization and exploration.
          Advantages: Performance: WebAssembly delivers near-native performance,
          enabling developers to build fast and responsive web applications.
          Compatibility: It works across all major web browsers without
          requiring plugins or additional installations. Security: WebAssembly
          runs in a sandboxed environment, mitigating security risks associated
          with executing untrusted code. Interoperability: It seamlessly
          integrates with existing web technologies like JavaScript, HTML, and
          CSS, allowing for easy adoption and integration into web applications.
          Community Support: WebAssembly has a vibrant ecosystem with growing
          community support, including libraries, tools, and frameworks to aid
          development. Future Prospects: WebAssembly is still in its early
          stages, but its potential impact on web development and beyond is
          immense. As browser support continues to improve and tooling matures,
          we can expect to see increased adoption of WebAssembly in various
          domains, including web applications, cloud computing, edge computing,
          and IoT. In conclusion, WebAssembly represents a significant
          advancement in web technology, enabling developers to build faster,
          more efficient, and more capable web applications that can run across
          a wide range of platforms and devices. Its versatility, performance,
          and security features make it a compelling choice for modern web
          development and beyond.
        </p>
      </div>
      <div className="m-10 p-10">
        <SalesforceForm />
        <SalesforceButton />
      </div>
    </div>
  );
}

export default App;
