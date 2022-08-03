# Citus Data [Hyperscale] Code sample with Node.Js

A Citus Data [Hyperscale] code sample using Node.Js API

## 🚀 Resources Used

- **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=javascript-72292-gllemos)**
- **[Node.js 16.x](https://nodejs.org/en/)**
- **[Citus Data](https://www.citusdata.com/product/hyperscale-citus/?WT.mc_id=javascript-72292-gllemos)**
- **[Azure Data Studio](https://docs.microsoft.com/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver16&WT.mc_id=javascript-72292-gllemos)**
- **[Azure Free Account](https://azure.microsoft.com/?WT.mc_id=javascript-72292-gllemos)**
- Some Visual Studio Code Extensions:
  - **[Azure Tools Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=javascript-72292-gllemos)**
  - **[REST Client Extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client&WT.mc_id=javascript-72292-gllemos)**

## 🔥 How to run the application locally? 

You just neeed to follow these steps:

1. Open your PostgreSQL (PG Admin) or Azure Data Studio and make the connections following the image below:

[![citus-nodejs-01.png](https://i.postimg.cc/D0XcSxtg/citus-nodejs-01.png)](https://postimg.cc/9wc9SYXR)

2. Now right click on `pharmacy-api` and `New Query` and create the 'Pharmacy' table

[![citus-nodejs-02.png](https://i.postimg.cc/Hk91Jzmd/citus-nodejs-02.png)](https://postimg.cc/4YySqznS)

```sql
CREATE TABLE pharmacy (
  pharmacy_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  pharmacy_name VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  zip_code INTEGER NOT NULL
);
```

3. Now get your Citus Data [Hyperscale] connection string and include inside the `.env` file.

* .env file

```text
CITUS_DATABASE_URL=postgres://citus:<citus-password>@c.<citus-resource-name>.postgres.database.azure.com:5432/citus?ssl=true
```

4. Now go to the `pharmacy-api` folder and then run the following command:

```bash
npm nodemon
```

5. Open Postman and go to (GET) `http://localhost:3000/api` if you receive the message below is because the api was connected successfully:

```json
{
  "message": "Welcome to the pharmacy API"
}
``` 

6. If you want to test all the HTTP verbs, you can use the `pharmacy.http` file.

## ❓ Questions? Comments?

If you have any questions about the code developed, feel free to open an **[ISSUE HERE](https://github.com/glaucia86/citusdata-nodejs-code-sample/issues)**. We'll get back to you soon!
