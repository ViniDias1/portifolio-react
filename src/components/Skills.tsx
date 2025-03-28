import { useState } from 'react';
const Skills = () => {
  const [activeTab, setActiveTab] = useState('backend');
  return <section className="py-16" id="skills">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <p className="text-gray-400 mb-8">
        Linguagens e Ferramentas que utilizo no meu dia a dia.
      </p>
      <div className="bg-[#242938] rounded-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-700">
          {/* <button className={`py-2 px-6 ${activeTab === 'frontend' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('frontend')}>
            Frontend
          </button> */}
          <button className={`py-2 px-6 ${activeTab === 'backend' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('backend')}>
            Tecnologias mais usadas
          </button>
          <button className={`py-2 px-6 ${activeTab === 'ferramentas' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('ferramentas')}>
            Ferramentas
          </button>
        </div>
        {/* Tab Content */}
        <div className="p-6">
          {/* {activeTab === 'frontend' && <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1a1f2e] p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <div className="text-cyan-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.24 2.53c.55-.06 1.07.17 1.34.65l.03.06c.35.6.2 1.37-.36 1.75l-.12.07c-.46.24-.93.48-1.4.71l-.47.23c-.38.19-.82.32-1.28.32a2.99 2.99 0 0 1-2.9-2.77c-.02-.58.16-1.15.49-1.6l.03-.03a2.46 2.46 0 0 1 2.02-.8l.1.01 2.52.4z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-center mb-2">React</h3>
                <p className="text-sm text-gray-400 text-center">
                  For building dynamic and efficient user interfaces tailored to
                  modern web applications.
                </p>
              </div>
              <div className="bg-[#1a1f2e] p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <div className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-center mb-2">
                  Next.js
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  For creating high-performance web applications with{' '}
                  <span className="text-blue-400">server-side</span> rendering
                  and seamless SEO optimization.
                </p>
              </div>
              <div className="bg-[#1a1f2e] p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <div className="text-cyan-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.24 2.53c.55-.06 1.07.17 1.34.65l.03.06c.35.6.2 1.37-.36 1.75l-.12.07c-.46.24-.93.48-1.4.71l-.47.23c-.38.19-.82.32-1.28.32a2.99 2.99 0 0 1-2.9-2.77c-.02-.58.16-1.15.49-1.6l.03-.03a2.46 2.46 0 0 1 2.02-.8l.1.01 2.52.4z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-center mb-2">
                  React Native
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  For developing{' '}
                  <span className="text-blue-400">cross-platform</span> with a
                  native-like user experience.
                </p>
              </div>
            </div>} */}
          {activeTab === 'backend' && (
            <div className="space-y-6">
              {/* Languages */}
              <div className="grid md:grid-cols-5 gap-6 bg-[#1c202f] p-6 rounded-lg">
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="40" width="100" alt="Java logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Java</h3>
                  <p className="text-sm text-gray-400 text-center">Robust and versatile programming language for backend development.</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" width="100" alt="Python logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Python</h3>
                  <p className="text-sm text-gray-400 text-center">Ideal for building scalable and efficient backend systems.</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="100" alt="JavaScript logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">JavaScript</h3>
                  <p className="text-sm text-gray-400 text-center">Widely used for server-side development with Node.js.</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="100" alt="TypeScript logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">TypeScript</h3>
                  <p className="text-sm text-gray-400 text-center">Widely used for server-side development with TypeScript.</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="100" alt="TypeScript logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Node.js</h3>
                  <p className="text-sm text-gray-400 text-center">Widely used for server-side development with TypeScript.</p>
                </div>
              </div>
              {/* Frameworks */}
              <div className="grid md:grid-cols-4 gap-6 bg-[#1c202f] p-6 rounded-lg">
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                    <div className="flex justify-center mb-4">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" height="40" width="100" alt="Spring logo" />
                    </div>
                    <h3 className="text-xl font-medium text-center mb-2">Spring</h3>
                    <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg" height="40" width="100" alt="TypeScript logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">JUnit</h3>
                  <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" height="40" width="100" alt="Spring logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Angular</h3>
                  <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="100" alt="React logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">React</h3>
                  <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
                
              </div>
              {/* Databases */}
              <div className="grid md:grid-cols-3 gap-6 bg-[#1d2131] p-6 rounded-lg">
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" width="100" alt="MySQL logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">MySQL</h3>
                  <p className="text-sm text-gray-400 text-center">Reliable relational database management system.</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" width="100" alt="PostgreSQL logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">PostgreSQL</h3>
                  <p className="text-sm text-gray-400 text-center">Advanced open-source relational database system.</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" height="40" width="100" alt="oracle logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Oracle</h3>
                  <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'ferramentas' && (
            <div className="space-y-6">
              {/* Languages */}
              <div className="grid md:grid-cols-4 gap-6 bg-[#1c202f] p-6 rounded-lg">
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="40" width="100" alt="Doker logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Docker</h3>
                  <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" height="40" width="100" alt="Postman logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Postman</h3>
                  <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="100" alt="Git logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Git</h3>
                  <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" width="100" alt="Visual Studio Code logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Visual Studio Code</h3>
                  <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
              </div>

              {/* Ota linha */}
              <div className="grid md:grid-cols-4 gap-6 bg-[#1c202f] p-6 rounded-lg">
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" height="40" width="100" alt="GitLab logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">GitLab</h3>
                  <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="100" alt="GitHub logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">GitHub</h3>
                  <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" height="40" width="100" alt="TypeScript logo" />
                  </div>
                  <h3 className="text-xl font-medium text-center mb-2">Swagger</h3>
                  <p className="text-sm text-gray-400 text-center">TEXTO</p>
                </div>
              </div>
              {/* Ota linha */}

            </div>
          )}

        </div>
      </div>
    </section>;
};
export default Skills;