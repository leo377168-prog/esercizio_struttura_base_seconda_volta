from flask import Flask, jsonify
from flask_cors import CORS 
import mysql.connector

app = Flask(__name__)
CORS(app)

def connessione_db():
    return mysql.connector.connect(
        host='localhost',
        user='utente_negozio',
        password='123',
        database='negozio'
    )



@app.route('/api/prodotti', methods = ['GET'])

def recupera_dati():
    try:
        conn = connessione_db()
        cursor = conn.cursor(dictionary=True)

        query = 'SELECT id, nome FROM prodotti;'
        cursor.execute(query)
        prodotti = cursor.fetchall()
        conn.close()
        cursor.close()
        return jsonify(prodotti), 200
    except mysql.connector.Error as exc:
        return jsonify({"error": f"Database error: {exc}"}), 500
    except Exception as exc:
        return jsonify({"error": f"Unexpected error: {exc}"}), 500
     



@app.route('/api/prodotti/<int:prdotti_id>', methods = ['GET'])

def recupera_prodotto(prodotti_id):
    conn = connessione_db()
    cursor = conn.cursor(dictionary=True)

    query = 'SELECT id, nome, prezzo, (prezzo*1.25) AS prezzo_ivato FROM prodotti WHERE id = %s;'
    cursor.execute(query)
    prodotti = cursor.fetchone()
    conn.close()
    cursor.close()
        if prodotto:
            return jsonify(prodotto), 200
        else:
            return jsonify({"error": "Prodotto non trovato"}), 404
    except mysql.connector.Error as exc:
        return jsonify({"error": f"Database error: {exc}"}), 500
    except Exception as exc:
        return jsonify({"error": f"Unexpected error: {exc}"}), 500
    

if __name__=="__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)


